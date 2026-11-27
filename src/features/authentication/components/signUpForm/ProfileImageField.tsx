

import { toast } from "sonner";
import { ImagePlus, Upload, X } from "lucide-react";

interface Props {
  imageUrl: string;
  setImageUrl: (value: string) => void;
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  previewUrl: string;
  setPreviewUrl: (value: string) => void;
}

const inputClass =
  "w-full rounded-xl border border-[#E8DCCB] bg-[#FFFCF7] px-4 py-3 pl-11 text-sm text-[#382820] outline-none transition-all placeholder:text-[#A88C75]/70 focus:border-[#B99A75] focus:ring-2 focus:ring-[#B99A75]/15 dark:border-[#705343]/60 dark:bg-[#2B211B] dark:text-[#FAF6EF] dark:placeholder:text-[#B99A75]/60";

const ProfileImageField = ({
    imageUrl,
    setImageUrl,
    imageFile,
    setImageFile,
    previewUrl,
    setPreviewUrl,
    }: Props) => {

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be smaller than 5MB.");
      event.target.value = "";
      return;
    }

    // Release previous preview URL
    if (previewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl);
    }

    setImageFile(file);

    // Create new preview URL
    setPreviewUrl(URL.createObjectURL(file));
  };

  const removeImage = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setImageFile(null);
    setImageUrl("");
    setPreviewUrl("");

    // Reset file input so the same image can be selected again
    const fileInput = document.getElementById(
      "profile-image"
    ) as HTMLInputElement | null;

    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div className="space-y-3">

      {/* Image URL */}
      <div>
        <label
          htmlFor="profile-image-url"
          className="mb-2 block text-sm font-medium text-espresso dark:text-beige"
        >
          Profile Image{" "}
          <span className="text-xs font-normal text-[#A47D56]">
            (Optional)
          </span>
        </label>

        <div className="relative">
          <ImagePlus
            size={17}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A47D56]"
          />

          <input
            id="profile-image-url"
            type="url"
            placeholder="Paste image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* File Upload */}
      <div>
        <p className="mb-2 text-xs text-[#806C5D] dark:text-[#C5AD99]">
          Or upload an image
        </p>

        <label
          htmlFor="profile-image"
          className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-antique-gold/60 bg-[#F8F2E9] px-4 py-5 text-center transition-all duration-300 hover:border-[#A47D56] hover:bg-antique-gold/10 dark:bg-[#2B211B] dark:hover:bg-antique-gold/10"
        >
          <Upload size={22} className="text-[#A47D56]" />

          <span className="text-sm font-medium text-espresso dark:text-ivory">
            {imageFile ? imageFile.name : "Choose an image"}
          </span>

          <span className="text-[11px] text-[#8A7565] dark:text-antique-gold">
            PNG, JPG or WEBP · Maximum 5MB
          </span>

          <input
            id="profile-image"
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Image Preview */}
      {(previewUrl || imageUrl) && (
        <div className="flex items-center gap-3 rounded-xl border border-beige p-3 dark:border-mocha/60">

          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-antique-gold/40 bg-[#F8F2E9] dark:bg-[#2B211B]">
            <img
              src={previewUrl || imageUrl}
              alt="Profile preview"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.visibility = "hidden";
              }}
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-espresso dark:text-ivory">
              Profile preview
            </p>

            <p className="truncate text-[11px] text-[#8A7565] dark:text-antique-gold">
              {imageFile ? "Selected file" : "Image URL"}
            </p>
          </div>

          <button
            type="button"
            onClick={removeImage}
            aria-label="Remove profile image"
            className="rounded-full p-2 text-[#A47D56] transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"
          >
            <X size={17} />
          </button>
        </div>
      )}

      <p className="text-[11px] leading-5 text-[#8A7565] dark:text-antique-gold">
        If you select a file and provide a URL, the uploaded file will be used.
      </p>

    </div>
  );
};

export default ProfileImageField;
