import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {useSnackbar} from 'notistack';

export const Editresidence = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    title1: "",
    title2: "",
    description: "",
    date1: "",
    author: ""
  });

  const [image, setImage] = useState({
    file: null,
    preview: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResidence = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5001/residences/${id}`);
        if (!response.ok) throw new Error("Failed to fetch residence");
        
        const data = await response.json();

        setFormData({
          title1: data.title1 || "",
          title2: data.title2 || "",
          description: data.description || "",
          date1: data.date1 || "",
          author: data.author || ""
        });

        setImage(prev => ({
          ...prev,
          preview: data.image?.base64 
            ? `data:${data.image.contentType};base64,${data.image.base64}`
            : ""
        }));
        
      } catch (error) {
        console.error("Error fetching residence:", error);
        setError("Failed to load residence data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchResidence();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage({
          file: file,
          preview: reader.result
        });
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

    if (image.file) formDataToSend.append("image", image.file);

    try {
      const response = await fetch(`http://localhost:5001/residences/${id}`, {
        method: "PUT",
        body: formDataToSend,
      });

      if (!response.ok) throw new Error("Failed to update residence");
      enqueueSnackbar("Residence data loaded successfully", { variant: "success" });

      navigate("/CRUD");

    } catch (error) {
      enqueueSnackbar("Failed to load residence data", { variant: "error" });
      console.error("Error updating residence:", error);
      setError("Failed to update residence. Please try again.");
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
      <h2 className="form-title">Edit Residence ({id})</h2>
      
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="title1">Title 1*</label>
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
            <label htmlFor="date1">Date*</label>
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
            <label htmlFor="author">Author*</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="5"
            />
          </div>

          <div className="form-group image-upload full-width">
            <label>Image (Home Page)</label>
            {image.preview && (
              <div className="image-preview">
                <img src={image.preview} alt="Current Residence Preview" />
                <button 
                  type="button" 
                  className="remove-image-btn"
                  onClick={() => setImage({ file: null, preview: "" })}
                >
                  Remove Image
                </button>
              </div>
            )}
            <div className="file-input-wrapper">
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageChange}
              />
              <label htmlFor="image-upload" className="file-input-label">
                Choose Image
              </label>
            </div>
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
            {isLoading ? "Updating..." : "Update Residence"}
          </button>
        </div>

        {error && <div className="form-error">{error}</div>}
      </form>
    </div>
  );
};