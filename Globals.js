import { createContext } from "react";

export const formatTime = unix => {
	const date = new Date(unix);
	const day = "0" + date.getDate();
	const month = "0" + (date.getMonth() + 1).toString();
	const year = date.getFullYear();
	const hours = "0" + date.getHours();
	const minutes = "0" + date.getMinutes();
	return `${day.slice(-2)}/${month.slice(-2)}/${year} ${hours.slice(-2)}:${minutes.slice(-2)}`;
}

export const colours = [
	"rgb(73, 0, 231)",
	"rgb(0, 65, 255)",
	"rgb(0, 122, 255)",
	"rgb(0, 185, 255)",
	"rgb(88, 40, 193)",
	"rgb(70, 99, 187)",
	"rgb(110, 171, 236)",
	"rgb(18, 60, 151)",
	"rgb(152, 206, 70)",
	"rgb(43, 144, 59)",
	"rgb(67, 223, 124)",
	"rgb(8, 168, 101)",
	"rgb(153, 255, 0)",
	"rgb(0, 255, 38)",
	"rgb(0, 255, 94)",
	"rgb(0, 255, 149)",
	"rgb(175, 35, 68)",
	"rgb(158, 32, 32)",
	"rgb(169, 37, 123)",
	"rgb(232, 79, 148)",
	"rgb(255, 0, 60)",
	"rgb(255, 0, 0)",
	"rgb(255, 0, 166)",
	"rgb(255, 0, 115)",
	"rgb(121, 24, 109)",
	"rgb(101, 79, 102)",
	"rgb(173, 130, 188)",
	"rgb(204, 0, 255)",
	"rgb(251, 252, 170)",
	"rgb(203, 236, 35)",
	"rgb(205, 184, 45)",
	"rgb(255, 230, 0)",
	"rgb(115, 83, 190)",
	"rgb(17, 0, 173)",
	"rgb(60, 53, 110)",
	"rgb(66, 4, 133)",
	"rgb(255, 255, 255)",
	"rgb(193, 193, 193)",
	"rgb(126, 126, 126)",
	"rgb(65, 65, 65)",
]

export const AppContext = createContext({})