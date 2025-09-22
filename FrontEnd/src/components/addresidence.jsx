import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AddResidence = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title1: "",
    title2: "",
    description: "",
    date1: "",
    author: "",
  });
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title1, title2, description, date1, author } = formData;
  
    const formDataToSend = new FormData();
    formDataToSend.append('title1', title1);
    formDataToSend.append('title2', title2);
    formDataToSend.append('author', author);
    formDataToSend.append('date1', date1);
    formDataToSend.append('description', description);
    if (image) formDataToSend.append('image', image);
  
    try {
      setIsSubmitting(true);
      const response = await fetch('http://localhost:5001/residences/addResidence', {
        method: 'POST',
        body: formDataToSend,
      });
  
      const data = await response.json();
      setIsSubmitting(false);
  
      if (response.status === 200) {
        console.log('Residence added successfully');
        navigate('/CRUD');
      } else {
        setError('Error adding residence: ' + data.message);
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error adding residence:', error);
      setError('Error adding residence: ' + error.message);
    }
  };
  

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add Residence</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title1" className="form-label">
            Title 1*
          </label>
          <input
            type="text"
            className="form-control"
            id="title1"
            name="title1"
            value={formData.title1}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title2" className="form-label">
            Title 2
          </label>
          <input
            type="text"
            className="form-control"
            id="title2"
            name="title2"
            value={formData.title2}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description*
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date1" className="form-label">
            Date*
          </label>
          <input
            type="date"
            className="form-control"
            id="date1"
            name="date1"
            value={formData.date1}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date1" className="form-label">
            author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image*
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
