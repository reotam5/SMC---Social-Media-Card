import { useEffect, useState } from "react";
import SNSCard from "../components/SNSCard";
import { useLocation } from "react-router-dom";
import QRCodeTest from "./QRCodeTest";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { SNS_TYPE } from "../constant";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

function Profile() {
    const search = useLocation().search;
    const query = new URLSearchParams(search);
    const [info, setInfo] = useState({});
    useEffect(() => {
        try {
            setInfo(JSON.parse(query.get("info")));
        } catch (e) {
            console.error(e);
        }
    }, []);
    useEffect(() => {
        setName((info && info.name) || "No Name");
        setNote((info && info.note) || "No Note");
        setSns((info && info.sns) || []);
    }, [info]);

    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const [sns, setSns] = useState([]);

    const [qrData, setQrData] = useState(null);
    useEffect(() => {
        const obj = {
            name,
            note,
            sns,
        };
        setQrData(JSON.stringify(obj));
    }, [name, note, sns]);

    const handleDelete = (index) => {
        setSns(sns.filter((_, i) => i !== index));
    };

    const handleAdd = (item) => {
        setSns([...sns, item]);
    };

    const [isEditing, setIsEditing] = useState(false);
    const [tempText, setTempText] = useState(note);

    const [isNameEditing, setIsNameEditing] = useState(false);
    const [tempName, setTempName] = useState(name);

    return (
        <>
            <div className="min-h-screen flex flex-col max-w-lg mx-auto border-r border-l border-gray-300 opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center">
                <div className="flex flex-col items-center px-4 pt-12 justify-between">
                    <QRCodeTest
                        data={`${window.location.protocol}//${window.location.host}/?info=${qrData}`}
                    />
                    <div className="w-9/12 flex items-center justify-center pl-6">
                        <div className="flex justify-center items-center leading-none">
                            {isNameEditing ? (
                                <TextField
                                    value={tempName}
                                    onChange={(e) =>
                                        setTempName(e.target.value)
                                    }
                                    fullWidth
                                    multiline
                                />
                            ) : (
                                <p className="text-2xl font-bold">{name}</p>
                            )}
                        </div>
                        <IconButton
                            onClick={() => {
                                setIsNameEditing((prev) => {
                                    if (prev) {
                                        setName(tempName);
                                    }
                                    return !prev;
                                });
                            }}
                        >
                            {isNameEditing ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </div>
                </div>
                <div className="pt-12 px-4 w-full flex flex-col">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-600">Note</p>
                        <IconButton
                            onClick={() => {
                                setIsEditing((prev) => {
                                    if (prev) {
                                        setNote(tempText);
                                    }
                                    return !prev;
                                });
                            }}
                        >
                            {isEditing ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </div>
                    <div className="flex w-full pt-2 space-x-2 flex-wrap">
                        {isEditing ? (
                            <TextField
                                value={tempText}
                                onChange={(e) => setTempText(e.target.value)}
                                fullWidth
                                multiline
                            />
                        ) : (
                            <p className="text-sm pt-1 font-light text-gray-700">
                                {note}
                            </p>
                        )}
                    </div>
                </div>
                <div className="pt-12 px-4 mb-4 w-full flex flex-col">
                    <div className="flex justify-between">
                        <p className="font-semibold text-gray-600">SNS</p>
                    </div>
                    <div className="flex flex-col w-full pt-2 space-y-2">
                        {sns.map((item, index) => (
                            <SNSCard
                                key={index}
                                index={index}
                                item={item}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </div>
                    <Divider sx={{ marginTop: "30px" }}>ADD</Divider>
                    <AddItem handleAdd={handleAdd} />
                </div>
            </div>
        </>
    );
}

function AddItem({ handleAdd }) {
    const [type, setType] = useState(SNS_TYPE[0]);
    const [userName, setUserName] = useState("");
    return (
        <div className="flex flex-row w-full pt-2 space-y-2 px-4 justify-between items-center">
            <FormControl sx={{ marginTop: 3 }} variant="standard">
                <Select
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value);
                    }}
                    label="SNS"
                >
                    {SNS_TYPE.map((item, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="standard">
                <TextField
                    label="username / link"
                    variant="standard"
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
            </FormControl>
            <button
                onClick={() => {
                    handleAdd({
                        type,
                        userName,
                    });
                }}
            >
                <FontAwesomeIcon icon={faSave} />
            </button>
        </div>
    );
}
export default Profile;
