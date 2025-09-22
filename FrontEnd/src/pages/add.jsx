import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSnackbar } from "notistack";
function AddUser() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [description, setDescription] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title1", title1);
      formData.append("title2", title2);
      formData.append("description", description);
      formData.append("date1", date1);
      formData.append("date2", date2);

      // Make sure these are different files
      if (image) formData.append("image", image);
      if (image2) formData.append("image2", image2);

      const response = await fetch("http://localhost:5001/events/addEvents", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        navigate("/CRUD");
        enqueueSnackbar("Event added successfully", { variant: "success" });
      } else {
        console.error("Failed to add event");
        enqueueSnackbar("Failed to add event", { variant: "error" });
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <>
      <h2>Add Event</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title1">Title 1</label>
          <input
            type="text"
            className="form-control"
            id="title1"
            value={title1}
            onChange={(e) => setTitle1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title2">Title 2</label>
          <input
            type="text"
            className="form-control"
            id="title2"
            value={title2}
            onChange={(e) => setTitle2(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date1">Date Start</label>
          <input
            type="date"
            className="form-control"
            id="date1"
            value={date1}
            onChange={(e) => setDate1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date2">Date End</label>
          <input
            type="date"
            className="form-control"
            id="date2"
            value={date2}
            onChange={(e) => setDate2(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image">Image 1 (Home Page)</label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image2">Image 2 (Archive Page)</label>
          <input
            type="file"
            className="form-control"
            id="image2"
            accept="image/*"
            onChange={(e) => setImage2(e.target.files[0])}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddUser;
