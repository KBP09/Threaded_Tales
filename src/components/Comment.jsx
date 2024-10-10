import { useState, useRef, useEffect } from "react";
import Action from "./Action";
import DownArrow from "../assets/down-arrow.svg"; // Import as regular SVG
import UpArrow from "../assets/up-arrow.svg"; // Import as regular SVG

const NestedComment = ({
    handleInsertNode,
    handleEditNode,
    handleDeleteNode,
    comment,
}) => {
    const [input, setInput] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(false);
    const inputRef = useRef(null);
    const hiddenDivRef = useRef(null); // For calculating height

    useEffect(() => {
        if (editMode) {
            inputRef.current.focus();
        }
    }, [editMode]);

    // Update the hidden div with the current input value to calculate dimensions
    useEffect(() => {
        if (hiddenDivRef.current) {
            hiddenDivRef.current.innerText = input || " "; // Add a space to avoid zero height
            hiddenDivRef.current.style.width = `${inputRef.current?.offsetWidth || 0}px`; // Sync width
        }
    }, [input]);

    // Adjust the height of the textarea based on the content
    const adjustHeight = (e) => {
        const textarea = e.target;
        textarea.style.height = "auto"; 
        textarea.style.height = `${textarea.scrollHeight}px`; // Set to scroll height
    };

    const handleNewComment = () => {
        setExpand((prev) => !prev);
        setShowInput(true);
    };

    const onAddComment = () => {
        if (editMode) {
            handleEditNode(comment.id, inputRef.current.innerText);
        } else {
            setExpand(true);
            handleInsertNode(comment.id, input);
            setShowInput(false);
            setInput("");
        }
        setEditMode(false);
    };

    const handleDelete = () => {
        handleDeleteNode(comment.id);
    };

    return (
        <div className="nested-comment relative mb-4"> {/* Added mb-4 for margin */}
            {/* Left line indicator */}
            {comment.id !== 1 && (
                <div
                    className="absolute left-0 w-1 bg-white"
                    style={{
                        top: "10px", // Adjust to position vertically as needed
                        height: "calc(100% - 20px)", // Dynamic height
                    }}
                ></div>
            )}
            <div
                className={`flex flex-col items-start mt-1 p-2 rounded-md bg-[#1A1A1A] border-2 border-red-500 w-full max-w-[700px]`}
                style={{
                    borderImage: "linear-gradient(45deg, red, red) 1",
                    marginBottom: "20px", // Add margin to create distance between boxes
                }}
            >
                {comment.id === 1 ? (
                    <>
                        <textarea
                            ref={inputRef}
                            className="border border-gray-400 rounded-md p-1 text-black mb-4 resize-none"
                            autoFocus
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                adjustHeight(e); // Adjust height on input change
                            }}
                            placeholder="Type..."
                            style={{
                                width: "100%",
                                height: "40px", // Initial height
                                overflow: "hidden",
                            }}
                        />
                        <Action
                            className="ml-2 bg-blue-500 text-white rounded-md p-1 w-24"
                            type="COMMENT"
                            handleClick={onAddComment}
                        />
                    </>
                ) : (
                    <>
                        <div
                            contentEditable={editMode}
                            suppressContentEditableWarning={editMode}
                            ref={inputRef}
                            className={`items-center ${editMode ? "border border-gray-400 p-1" : ""}`}
                            style={{
                                wordWrap: "break-word",
                                color: "white",
                                display: "block", // Change to block to allow height expansion
                                maxWidth: "100%", // Prevent overflow and allow wrapping
                                overflow: "hidden", // Hide overflow
                            }}
                        >
                            {comment.name}
                        </div>
                        <div className="flex mt-2">
                            {editMode ? (
                                <>
                                    <Action
                                        className="text-blue-500"
                                        type="SAVE"
                                        handleClick={onAddComment}
                                    />
                                    <Action
                                        className="text-red-500"
                                        type="CANCEL"
                                        handleClick={() => {
                                            if (inputRef.current)
                                                inputRef.current.innerText = comment.name;
                                            setEditMode(false);
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    <Action
                                        className="flex items-center text-blue-500"
                                        type={
                                            <>
                                                <img
                                                    src={expand ? UpArrow : DownArrow}
                                                    alt="Toggle reply"
                                                    className="w-4 h-4"
                                                    style={{ filter: "invert(1)" }}
                                                />
                                                REPLY
                                            </>
                                        }
                                        handleClick={handleNewComment}
                                    />
                                    <Action
                                        className="text-blue-500"
                                        type="EDIT"
                                        handleClick={() => {
                                            setEditMode(true);
                                            setInput(comment.name); // Set input to current comment name for editing
                                        }}
                                    />
                                    <Action
                                        className="text-red-500"
                                        type="DELETE"
                                        handleClick={handleDelete}
                                    />
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>

            <div className={`pl-6 ${expand ? "block" : "hidden"}`}>
                {showInput && (
                    <div className="flex flex-col sm:flex-row items-baseline mt-2">
                        <textarea
                            className="border border-gray-400 rounded-md p-1 text-black mb-2 sm:mb-0 resize-none"
                            autoFocus
                            onChange={(e) => {
                                setInput(e.target.value);
                                adjustHeight(e); // Adjust height on input change
                            }}
                            placeholder="Reply..."
                            style={{
                                width: "100%",
                                height: "40px", // Initial height
                                overflow: "hidden",
                            }}
                        />
                        <Action className="ml-2 bg-blue-500 text-white rounded-md p-1" type="REPLY" handleClick={onAddComment} />
                        <Action
                            className="ml-2 text-red-500"
                            type="CANCEL"
                            handleClick={() => {
                                setShowInput(false);
                                if (!comment?.items?.length) setExpand(false);
                            }}
                        />
                    </div>
                )}

                {comment?.items?.map((cmnt) => {
                    return (
                        <NestedComment
                            key={cmnt.id}
                            handleInsertNode={handleInsertNode}
                            handleEditNode={handleEditNode}
                            handleDeleteNode={handleDeleteNode}
                            comment={cmnt}
                        />
                    );
                })}
            </div>

            {/* Hidden div for calculating dimensions */}
            <div ref={hiddenDivRef} className="hidden" />
        </div>
    );
};

export default NestedComment;
