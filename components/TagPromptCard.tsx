import React from "react";

const TagPromptCard = ({tagName}) => {
  return (
    <div className="inline-block text-[#f8fafc] text-xs rounded-full bg-[#393939] px-2 py-1">
      {tagName}
    </div>
  );
};

export default TagPromptCard;
