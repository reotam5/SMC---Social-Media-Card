import { faInstagram, faTwitter,  faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faLink } from "@fortawesome/free-solid-svg-icons";

export const SNS_TYPE = ["instagram", "twitter", "facebook", "website", "other"];


export const getIcon = (type) => {
    switch (type.toLowerCase()) {
        case "instagram":
            return faInstagram;
        case "twitter":
            return faTwitter;
        case "facebook":
            return faFacebook;
        case "website":
            return faDesktop;
        default:
            return faLink;
    }
}

export const getTitle = (type) => {
    switch (type.toLowerCase()) {
        case "instagram":
            return "Instagram";
        case "twitter":
            return "Twitter";
        case "facebook":
            return "Facebook";
        case "website":
            return "Website";
        default:
            return "Link";
    }
}

export const getUrl = (type, userName) => {
    switch (type.toLowerCase()) {
        case "instagram":
            return `https://www.instagram.com/${userName}`;
        case "twitter":
            return `https://twitter.com/${userName}`;
        case "facebook":
            return `https://www.facebook.com/${userName}`;
        case "website":
            return `https://${userName}`;
        default:
            return userName;
    }
}