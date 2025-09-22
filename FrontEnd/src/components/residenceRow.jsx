import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const ResiRow = ({ userdata, residence, setResidence }) => {
    const navigate = useNavigate();


    const image1Src = userdata.image?.base64
    ? `data:${userdata.image.contentType};base64,${userdata.image.base64}`
    : null;

    console.log("IMAGE DATA", userdata.image);



    return (
        <tr>
            <td className="pl-4">{userdata.title1}</td>
            <td>
                <h5 className="font-medium mb-0">{userdata.title2}</h5>
            </td>
            <td>
                <span className="text-muted">{userdata.date1}</span>
            </td>

            <td>
                <span className="text-muted">{userdata.description}</span>
            </td>
            <td>
                <span className="text-muted">{userdata.author}</span>
            </td>
            <td>
                {image1Src ? (
                    <img
                        src={image1Src}
                        alt="Home Page"
                        width="80"
                        height="80"
                        onError={(e) => console.error("Image failed to load", e)}
                    />
                ) : (
                    <span className="text-muted">No image</span>
                )}
            </td>

            <td className="crud-ops">
                <button
                    type="button"
                    className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"
                    onClick={async () => {
                        try {
                            const response = await fetch(`http://localhost:5001/residences/${userdata._id}`, {
                                method: "DELETE",
                            });

                            if (response.ok) {
                                const updatedList = residence.filter((obj) => obj._id !== userdata._id);
                                setResidence(updatedList);
                            } else {
                                console.error("Failed to delete user");
                            }
                        } catch (error) {
                            console.error("Error deleting user:", error);
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <button
                    type="button"
                    className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"
                    onClick={(e) => {
                        navigate("/edit/" + userdata._id);
                    }}
                >
                    <FontAwesomeIcon icon={faPen} />
                </button>
            </td>
        </tr>
    );
}

