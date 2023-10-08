import React from "react";
import Image from "next/image";

interface PlayerInformationProps {
  username: string;
  textColor?: string;
  textSize?: string;
  avatarSrc: string;
  avatarSize?: number;
  imageWidth?: number;
  imageHeight?: number;
  hasFlag?: boolean;
  flagSrc?: string;
  flagWidth?: number;
  flagHeight?: number;
}

const PlayerInformation: React.FC<PlayerInformationProps> = ({
  username,
  textColor = "text-bamboo-100",
  textSize = "text-2xl",
  avatarSrc,
  avatarSize = 12,
  imageWidth = 100,
  imageHeight = 100,
  hasFlag = false,
  flagSrc = "",
  flagWidth = 40,
  flagHeight = 40,
}) => {
  return (
    <div className="flex flex-col space-x-3 items-center md:flex-row">
      <div className="avatar">
        <div className={`w-${avatarSize} rounded-full`}>
          <Image
            src={avatarSrc}
            alt="Avatar"
            width={imageWidth}
            height={imageHeight}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div className={`${textColor} ${textSize} py-2`}>{username}</div>
      {hasFlag && (
        <div className="w-8">
          <Image
            src={flagSrc}
            alt="Flag"
            width={flagWidth}
            height={flagHeight}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      )}
      {/* Dự kiến: Thêm phần điểm + trạng thái hoạt động */}
    </div>
  );
};

export default PlayerInformation;