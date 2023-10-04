/* eslint-disable react/prop-types */
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '2rem',
        borderRadius: '8px',
    },
};

const DeletePostModal = ({ isOpen, onRequestClose, onDelete }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Delete Post Modal"
        >
            <h2 className="text-2xl font-semibold text-center mb-4">
                Do you want to delete this post?
            </h2>
            <div className="flex justify-center space-x-4">
                <button
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                    onClick={onRequestClose}
                >
                    Back
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={onDelete}
                >
                    Yes
                </button>
            </div>
        </Modal>
    );
};

export default DeletePostModal;
