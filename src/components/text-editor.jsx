import React, { useState } from "react";
import {
  EditorProvider,
  Editor,
  Toolbar,
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnStrikeThrough,
  BtnNumberedList,
  BtnBulletList,
  BtnUndo,
  BtnRedo,
  BtnLink,
} from "react-simple-wysiwyg";

export default function TextEditor({ label, value, onChange }) {
  const [isCodeView, setIsCodeView] = useState(false);

  const toggleCodeView = () => setIsCodeView((prev) => !prev);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-gray-700">
          {label}
        </label>
      )}

      <div className="border rounded-md shadow-sm bg-white overflow-hidden">
        <EditorProvider>
          {/* Toolbar */}
          <div className="flex items-center justify-between bg-gray-50 border-b px-2 py-1">
            <Toolbar>
              <BtnBold />
              <BtnItalic />
              <BtnUnderline />
              <BtnStrikeThrough />
              <BtnNumberedList />
              <BtnBulletList />
              <BtnLink />
              <BtnUndo />
              <BtnRedo />
            </Toolbar>

            {/* 🧩 Toggle Button */}
            <button
              type="button"
              onClick={toggleCodeView}
              className="text-xs text-gray-600 bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 ml-2 transition"
            >
              {isCodeView ? "View Design" : "View Code"}
            </button>
          </div>

          {/* Editor Area */}
          {isCodeView ? (
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full min-h-[220px] bg-gray-50 font-mono text-sm text-gray-800 p-3 outline-none border-0"
              placeholder="Edit raw HTML..."
            />
          ) : (
            <Editor
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="min-h-[220px] bg-white text-gray-800 px-3 py-2 focus:outline-none"
              placeholder="Write product description..."
            />
          )}
        </EditorProvider>
      </div>
    </div>
  );
}
