import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon, getTitle, getUrl } from "../constant";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

function SNSCard({ item, index, handleDelete }) {
    const { type, userName } = item;
    const title = getTitle(type);
    const icon = getIcon(type);
    const url = getUrl(type, userName);

    return (
        <>
            <div class="flex w-full h-12 hover:bg-gray-50 px-4">
                <div
                    class="w-2/12 h-full flex justify-center items-center"
                    onClick={() => {
                        window.open(url);
                    }}
                >
                    <FontAwesomeIcon style={{ fontSize: 35 }} icon={icon} />
                </div>
                <div
                    class="w-6/12 h-full flex items-start"
                    onClick={() => {
                        window.open(url);
                    }}
                >
                    <p class="my-auto text-lg font-semibold">{title}</p>
                </div>
                <div
                    class="w-4/12 h-full flex justify-end items-center"
                    onClick={() => {
                        window.open(url);
                    }}
                >
                    <p class="text-sm pt-1 font-light text-gray-700">
                        {userName}
                    </p>
                </div>
                <div class="w-4/12 h-full flex justify-end items-center">
                    <button onClick={()=>{handleDelete(index)}}>
                        <FontAwesomeIcon icon={faEraser} />
                    </button>
                </div>
            </div>
        </>
    );
}
export default SNSCard;
