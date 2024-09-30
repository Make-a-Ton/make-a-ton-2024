import React from "react";

const index = () => {
  return (
    <div className="h-screen">
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/appbx3uK70QNE5GL3/pagdIUHLW6sKeEAtv/form"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="100%"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
    </div>
  );
};

export default index;
