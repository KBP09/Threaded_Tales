import React from 'react';
import { useState } from 'react';
import NestedComment from '../components/Comment';
import useNode from '../hooks/useNode';

const comments = {
  id: 1,
  items: [],
};

export default function Commentpage() {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  return (
    <div className="flex flex-col min-h-screen"> {/* Use flex for layout */}
      <nav className="bg-gray-800 p-4"> {/* Example navbar */}
        <h1 className="text-white">Navbar</h1>
      </nav>
      <div className="flex-grow p-4"> {/* Use padding and flex-grow to push comments down */}
        <NestedComment
          handleInsertNode={handleInsertNode}
          handleEditNode={handleEditNode}
          handleDeleteNode={handleDeleteNode}
          comment={commentsData}
        />
      </div>
    </div>
  );
}
