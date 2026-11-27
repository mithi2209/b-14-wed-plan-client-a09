



export async function uploadProfileImage (
  imageFile: File
  ): Promise<string> {
    
  const formData = new FormData();
  formData.append("image", imageFile);

    const response = await fetch("/api/upload-image", {
    method: "POST",
    body: formData,
  });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Image upload failed.");
    }

    return result.imageUrl;
}
