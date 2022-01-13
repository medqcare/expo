import React from "react";
import Svg, { Path, Circle, Mask, G, Defs, LinearGradient, Stop, ClipPath, Rect } from "react-native-svg";

function SvgComponent({ title, titleId, color, ...props }) {
  	return (
		<Svg
			width={210}
			height={210}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Circle
				cx={105}
				cy={105}
				r={104.505}
				stroke="#C4C4C4"
				strokeWidth={0.991}
				strokeDasharray="17.83 17.83"
			/>
			<Mask id="b" fill="#fff">
				<Path d="M183.789 163.612A97.501 97.501 0 0 0 109.627 8.087a97.5 97.5 0 1 0 36.315 186.13l-.73-1.602A95.741 95.741 0 0 1 11.116 89.446a95.74 95.74 0 1 1 171.26 73.117l1.413 1.049Z" />
			</Mask>
			<Path
				d="M183.789 163.612A97.501 97.501 0 0 0 109.627 8.087a97.5 97.5 0 1 0 36.315 186.13l-.73-1.602A95.741 95.741 0 0 1 11.116 89.446a95.74 95.74 0 1 1 171.26 73.117l1.413 1.049Z"
				stroke="url(#a)"
				strokeWidth={8}
				mask="url(#b)"
			/>
			<Mask id="d" fill="#fff">
				<Path d="M18.466 96.477a87.498 87.498 0 0 0 55.15 90.507A87.5 87.5 0 1 0 72.33 24.531l.535 1.308a86.087 86.087 0 1 1-52.993 70.784l-1.407-.146Z" />
			</Mask>
			<Path
				d="M18.466 96.477a87.498 87.498 0 0 0 55.15 90.507A87.5 87.5 0 1 0 72.33 24.531l.535 1.308a86.087 86.087 0 1 1-52.993 70.784l-1.407-.146Z"
				stroke="url(#c)"
				strokeWidth={4}
				mask="url(#d)"
			/>
			<G clipPath="url(#e)">
				<Path
					d="M105.999 145.29c-4.23 0-8.04-2.52-9.69-6.42a9.494 9.494 0 0 1-.63-1.98.78.78 0 0 1 .63-.93.781.781 0 0 1 .93.615c.105.555.285 1.11.54 1.665a8.936 8.936 0 0 0 8.235 5.46c3.6 0 6.825-2.13 8.235-5.445.015-.045.045-.075.06-.12.225-.585.39-1.08.48-1.545.09-.435.51-.72.93-.63.435.09.705.51.63.93-.12.6-.315 1.23-.615 1.965a.47.47 0 0 1-.075.15 10.572 10.572 0 0 1-9.66 6.285Z"
					fill="#34495C"
				/>
				<Path
					d="M135.37 137.536H76.63c-3.3 0-6-2.61-6.03-5.835-.015-1.59.6-3.09 1.725-4.2a5.817 5.817 0 0 1 4.155-1.71h.315c.555 0 1.035-.45 1.065-1.005.33-5.55.855-10.77 1.59-15.51.255-1.665.555-3.345.885-4.965 5.76-28.86 18.615-30.51 23.895-29.895.825.105 1.44.255 1.77.345.33-.09.945-.255 1.77-.345 4.905-.57 16.965.81 23.07 26.13.39 1.59.735 3.255 1.05 4.935 1.065 5.655 1.83 12.15 2.25 19.305.03.555.51 1.005 1.065 1.005h.315a5.88 5.88 0 0 1 4.155 1.71 5.837 5.837 0 0 1 1.725 4.2c-.03 3.21-2.73 5.835-6.03 5.835Zm-58.89-10.17c-1.155 0-2.235.45-3.03 1.245a4.224 4.224 0 0 0-1.26 3.075c.015 2.34 2.01 4.26 4.44 4.26h58.74c2.43 0 4.41-1.905 4.44-4.26a4.248 4.248 0 0 0-1.26-3.075 4.228 4.228 0 0 0-3.03-1.245h-.315a2.67 2.67 0 0 1-2.655-2.49c-.42-7.095-1.155-13.515-2.22-19.11a89.464 89.464 0 0 0-1.02-4.86c-5.82-24.09-16.875-25.455-21.36-24.93-1.05.12-1.68.345-1.695.345a.832.832 0 0 1-.54 0s-.645-.225-1.695-.345c-4.815-.585-16.65 1.065-22.14 28.635-.33 1.605-.615 3.24-.87 4.89-.72 4.695-1.245 9.87-1.575 15.36a2.672 2.672 0 0 1-2.655 2.505h-.3Z"
					fill="#34495C"
				/>
				<Path
					d="M135.37 137.536H76.63c-3.3 0-6-2.61-6.03-5.835-.015-1.59.6-3.09 1.725-4.2a5.817 5.817 0 0 1 4.155-1.71h.315c.555 0 1.035-.45 1.065-1.005.33-5.55.855-10.77 1.59-15.51.255-1.665.555-3.345.885-4.965 5.76-28.86 18.615-30.51 23.895-29.895.825.105 1.44.255 1.77.345.33-.09.945-.255 1.77-.345 4.905-.57 16.965.81 23.07 26.13.39 1.59.735 3.255 1.05 4.935 1.065 5.655 1.83 12.15 2.25 19.305.03.555.51 1.005 1.065 1.005h.315a5.88 5.88 0 0 1 4.155 1.71 5.837 5.837 0 0 1 1.725 4.2c-.03 3.21-2.73 5.835-6.03 5.835Zm-58.89-10.17c-1.155 0-2.235.45-3.03 1.245a4.224 4.224 0 0 0-1.26 3.075c.015 2.34 2.01 4.26 4.44 4.26h58.74c2.43 0 4.41-1.905 4.44-4.26a4.248 4.248 0 0 0-1.26-3.075 4.228 4.228 0 0 0-3.03-1.245h-.315a2.67 2.67 0 0 1-2.655-2.49c-.42-7.095-1.155-13.515-2.22-19.11a89.464 89.464 0 0 0-1.02-4.86c-5.82-24.09-16.875-25.455-21.36-24.93-1.05.12-1.68.345-1.695.345a.832.832 0 0 1-.54 0s-.645-.225-1.695-.345c-4.815-.585-16.65 1.065-22.14 28.635-.33 1.605-.615 3.24-.87 4.89-.72 4.695-1.245 9.87-1.575 15.36a2.672 2.672 0 0 1-2.655 2.505h-.3Z"
					fill="#34495C"
				/>
				<Path
					d="M84.806 117.42a.802.802 0 0 1-.795-.75c-.51-10.515 1.44-19.245 5.805-25.95a.77.77 0 0 1 1.095-.225c.375.24.465.735.225 1.095-4.185 6.405-6.045 14.82-5.55 25.005a.789.789 0 0 1-.75.825h-.03Zm21.195-43.725a4.488 4.488 0 0 1-4.485-4.485 4.488 4.488 0 0 1 4.485-4.485 4.488 4.488 0 0 1 4.485 4.485 4.488 4.488 0 0 1-4.485 4.485Zm0-7.395a2.897 2.897 0 0 0-2.895 2.895 2.897 2.897 0 0 0 2.895 2.895 2.897 2.897 0 0 0 2.895-2.895c0-1.59-1.29-2.895-2.895-2.895Z"
					fill="#34495C"
				/>
				<Path
					d="M106 76.38a.8.8 0 0 1-.795-.795V72.9a.8.8 0 0 1 .795-.795.8.8 0 0 1 .795.795v2.685a.8.8 0 0 1-.795.795Z"
					fill="#34495C"
				/>
				<Path
					d="M137.44 101.685a.747.747 0 0 1-.48-.165.791.791 0 0 1-.15-1.11 9.956 9.956 0 0 0 1.92-7.425 9.944 9.944 0 0 0-3.885-6.6.791.791 0 0 1-.15-1.11.791.791 0 0 1 1.11-.15 11.48 11.48 0 0 1 4.5 7.65c.435 3.075-.36 6.12-2.235 8.595a.768.768 0 0 1-.63.315Z"
					fill="#F6B64E"
				/>
				<Path
					d="M142.778 105.57a.747.747 0 0 1-.48-.165.791.791 0 0 1-.15-1.11 16.362 16.362 0 0 0 3.165-12.225c-.615-4.365-2.88-8.235-6.39-10.89a.791.791 0 0 1-.15-1.11.791.791 0 0 1 1.11-.15 17.938 17.938 0 0 1 7.005 11.94c.675 4.785-.57 9.555-3.465 13.41a.848.848 0 0 1-.645.3Z"
					fill="#F6B64E"
				/>
				<Path
					d="M148.014 110.835a.843.843 0 0 1-.48-.165.791.791 0 0 1-.15-1.11c4.005-5.31 5.7-11.865 4.785-18.45-.915-6.585-4.35-12.42-9.66-16.425a.791.791 0 0 1-.15-1.11.79.79 0 0 1 1.11-.15c5.64 4.26 9.3 10.47 10.275 17.475.975 7.005-.825 13.98-5.085 19.62a.816.816 0 0 1-.645.315Zm-73.455-9.15a.768.768 0 0 1-.63-.315 11.593 11.593 0 0 1-2.235-8.595c.435-3.075 2.025-5.79 4.5-7.65a.79.79 0 0 1 1.11.15.79.79 0 0 1-.15 1.11 9.978 9.978 0 0 0-3.885 6.6c-.375 2.655.315 5.28 1.92 7.425a.79.79 0 0 1-.15 1.11.843.843 0 0 1-.48.165Z"
					fill="#F6B64E"
				/>
				<Path
					d="M69.219 105.57a.768.768 0 0 1-.63-.315c-2.91-3.855-4.14-8.61-3.465-13.41a18.054 18.054 0 0 1 7.005-11.94.791.791 0 0 1 1.11.15.79.79 0 0 1-.15 1.11 16.377 16.377 0 0 0-6.39 10.89c-.615 4.38.51 8.715 3.165 12.225a.79.79 0 0 1-.15 1.11.724.724 0 0 1-.495.18Z"
					fill="#F6B64E"
				/>
				<Path
					d="M63.985 110.835a.768.768 0 0 1-.63-.315c-4.26-5.64-6.075-12.615-5.085-19.62.975-7.005 4.635-13.215 10.275-17.475a.79.79 0 0 1 1.11.15.79.79 0 0 1-.15 1.11c-5.31 4.005-8.745 9.84-9.66 16.425-.915 6.585.78 13.14 4.785 18.45.27.345.195.84-.15 1.11a.928.928 0 0 1-.495.165Z"
					fill="#F6B64E"
				/>
			</G>
			<Defs>
				<LinearGradient
					id="a"
					x1={4.051}
					y1={84.818}
					x2={212.389}
					y2={86.555}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#F04444" />
					<Stop offset={1} stopColor="#0A5992" />
				</LinearGradient>
				<LinearGradient
					id="c"
					x1={14.456}
					y1={86.939}
					x2={201.426}
					y2={88.498}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#F04444" />
					<Stop offset={1} stopColor="#0A5992" />
				</LinearGradient>
				<ClipPath id="e">
					<Path fill="#fff" transform="translate(58 57)" d="M0 0h96v96H0z" />
				</ClipPath>
			</Defs>
		</Svg>
  	);
}

export default SvgComponent;