import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { data, useNavigate } from "react-router-dom";

export const UserRow = ({ userdata, userList, setUserList  }) => {
    const navigate = useNavigate();
    
    // Get both images
    const image1Src = userdata.image?.base64
        ? `data:${userdata.image.contentType || 'image/png'};base64,${userdata.image.base64}`
        : null;
        
    const image2Src = userdata.image2?.base64
        ? `data:${userdata.image2.contentType || 'image/png'};base64,${userdata.image2.base64}`
        : null;

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
                <span className="text-muted">{userdata.date2}</span>
            </td>
            <td>
                <span className="text-muted">{userdata.description}</span>
            </td>
            <td>
                {image1Src && (
                    <img
                        src={image1Src}
                        alt="Home Page"
                        width="80"
                        height="80"
                    />
                )}
            </td>
            <td>
                {image2Src && (
                    <img
                        src={image2Src}
                        alt="Archive Page"
                        width="80"
                        height="80"
                    />
                )}
            </td>
            <td className="crud-ops">
                <button
                    type="button"
                    className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"
                    onClick={async () => {
                        try {
                            const response = await fetch(`http://localhost:5001/events/${userdata._id}`, {
                                method: "DELETE",
                            });

                            if (response.ok) {
                                const updatedList = userList.filter((obj) => obj._id !== userdata._id);
                                setUserList(updatedList);
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
                        navigate("/edit/event/" + userdata._id);
                    }}
                >
                    <FontAwesomeIcon icon={faPen} />
                </button>
            </td>
        </tr>
    );
}

export default UserRow;