import React, { useState } from 'react';
import NestedComment from '../components/Comment';
import useNode from '../hooks/useNode';
import car from "../assets/car.jpg";
const comments = {
  id: 1,
  items: [],
};

export default function Commentpage() {
  const [commentsData, setCommentsData] = useState(comments);
  const [currentAccount, setCurrentAccount] = useState('');

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
    <div className="flex flex-col min-h-screen">
      <div className="mt-24 ml-4 sm:ml-10 mr-4 sm:mr-10 p-4 flex flex-col sm:flex-row gap-6 items-start bg-[#1A1A1A]">
        {/* Image Section */}
        <div className="w-full sm:w-[340px] h-[300px] bg-gray-200">
          <img src={car} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Text and Details Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Re:Cursed</h2>
          <p className="text-white leading-relaxed mb-4">
            Y/N: CAN I GET A REDO PLSS!!!. Dark: Nope. Y/N: WHY?!, It was all good I got my isekai cheat skill
            and I got to design how I look like in the end all I had to do was spin for which world I can get Isekai's
            but out of all the world it had to be . . . . RE:ZERO!!
          </p>
          <hr className="my-4 border-t border-gray-300" />
          <p className="text-sm text-white mb-4">
            English is my second language so there will be a lot of words missed used, spelled wrong, or not
            even the right word. If you point it out I will fix it...
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-black">meili</span>
            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-black">yutaokkotsu</span>
            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-black">rezero</span>
          </div>
        </div>
        </div>
        <div className="mt-16 ml-8 flex-grow p-4">
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
