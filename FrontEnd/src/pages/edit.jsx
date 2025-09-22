import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title1: "",
    title2: "",
    description: "",
    date1: "",
    date2: ""
  });

  const [images, setImages] = useState({
    img1: null,
    img2: null,
    preview1: "",
    preview2: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5001/events/${id}`);
        if (!response.ok) throw new Error("Failed to fetch event");
        
        const data = await response.json();

        setFormData({
          title1: data.title1 || "",
          title2: data.title2 || "",
          description: data.description || "",
          date1: data.date1 || "",
          date2: data.date2 || ""
        });

        setImages(prev => ({
          ...prev,
          preview1: data.image?.base64 
            ? `data:${data.image.contentType};base64,${data.image.base64}`
            : "",
          preview2: data.image2?.base64 
            ? `data:${data.image2.contentType};base64,${data.image2.base64}`
            : ""
        }));
      } catch (error) {
        console.error("Error fetching event:", error);
        setError("Failed to load event data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prev => ({
          ...prev,
          [field === 'img1' ? 'img1' : 'img2']: file,
          [field === 'img1' ? 'preview1' : 'preview2']: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    if (images.img1) formDataToSend.append("image", images.img1);
    if (images.img2) formDataToSend.append("image2", images.img2);

    try {
      const response = await fetch(`http://localhost:5001/events/${id}`, {
        method: "PUT",
        body: formDataToSend,
      });

      if (!response.ok) throw new Error("Failed to update event");
      navigate("/CRUD");
    } catch (error) {
      console.error("Error updating event:", error);
      setError("Failed to update event. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="edit-form-container">
      <h2 className="form-title">Edit Event ({id})</h2>
      
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="title1">Title 1</label>
            <input
              type="text"
              id="title1"
              name="title1"
              value={formData.title1}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="title2">Title 2</label>
            <input
              type="text"
              id="title2"
              name="title2"
              value={formData.title2}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date1">Date 1</label>
            <input
              type="date"
              id="date1"
              name="date1"
              value={formData.date1}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date2">Date 2</label>
            <input
              type="date"
              id="date2"
              name="date2"
              value={formData.date2}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
            />
          </div>

          <div className="form-group image-upload">
            <label>Image 1 (Home Page)</label>
            {images.preview1 && (
              <div className="image-preview">
                <img src={images.preview1} alt="Current Image 1 Preview" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, 'img1')}
            />
          </div>

          <div className="form-group image-upload">
            <label>Image 2 (Archive Page)</label>
            {images.preview2 && (
              <div className="image-preview">
                <img src={images.preview2} alt="Current Image 2 Preview" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, 'img2')}
            />
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            className="cancel-btn"
            onClick={() => navigate("/CRUD")}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Event"}
          </button>
        </div>

        {error && <div className="form-error">{error}</div>}
      </form>
    </div>
  );
};

export default EditUser;