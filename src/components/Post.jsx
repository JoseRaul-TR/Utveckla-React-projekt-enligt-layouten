import React from "react";

export default function Post({ title, body }) {
    return (
        <div className="mb-6 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-center">{title}</h2>
            <p className="text-gray-700 text-justify leading-relaxed">{body}</p>
        </div>
    );
}