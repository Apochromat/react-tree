import styles from './TreeWindow.module.css';
import TreeRoot from "../TreeRoot/TreeRoot";
import {useEffect, useState} from "react";
import {defaultTree} from "../../defaultTree";

function TreeWindow() {
    const [focusedNodeId, setFocusedNodeId] = useState(-1);
    const [tree, setTree] = useState(JSON.parse(JSON.stringify(defaultTree)));
    const [nodeAmount, setNodeAmount] = useState(9);

    const handleAddButtonClick = () => {
        let treeCopy = {...tree};
        let nodeName = prompt("Enter node name");
        nodeName = (nodeName !== null && nodeName.trim().length > 0) ? nodeName : "Unnamed Node";
        let newNode = {id: nodeAmount, nodeName: nodeName, children: []};
        let parent = findNodeById(treeCopy, focusedNodeId);
        if (parent) {
            parent.children.push(newNode);
            setTree(treeCopy);
        } else {
            treeCopy.children.push(newNode);
            setTree(treeCopy);
        }
        setNodeAmount(nodeAmount + 1);
    };

    const handleRemoveButtonClick = () => {
        let treeCopy = {...tree};
        let parent = findParentNode(treeCopy, focusedNodeId);
        if (parent) {
            parent.children = parent.children.filter(child => child.id !== focusedNodeId);
        }
        setTree(treeCopy);
    };

    const handleEditButtonClick = () => {
        let treeCopy = {...tree};
        let node = findNodeById(treeCopy, focusedNodeId);
        if (node) {
            let nodeName = prompt("Enter node name");
            nodeName = (nodeName !== null && nodeName.trim().length > 0) ? nodeName : node.nodeName;
            node.nodeName = nodeName;
        }
        setTree(treeCopy)
    };

    const handleResetButtonClick = () => {
        let treeCopy = JSON.parse(JSON.stringify(defaultTree));
        setTree(treeCopy);
    };

    const handleDocumentClick = (event) => {
        if (event.target.className === "App") {
            setFocusedNodeId(-1);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);
    });

    return (
        <div className={styles.window}>
            <div className={styles.title}>Tree</div>
            <div className={styles.tree}>
                <TreeRoot children={tree.children} handler={setFocusedNodeId} focused={focusedNodeId}/>
            </div>
            <div className={styles.buttonBox}>
                <button className={`${styles.button} ${styles.button__add}`} onClick={handleAddButtonClick}>Add</button>
                <button className={`${styles.button} ${styles.button__remove}`}
                        onClick={handleRemoveButtonClick}>Remove
                </button>
                <button className={`${styles.button} ${styles.button__edit}`} onClick={handleEditButtonClick}>Edit
                </button>
                <button className={`${styles.button} ${styles.button__reset}`} onClick={handleResetButtonClick}>Reset
                </button>
            </div>
        </div>
    );
}

export default TreeWindow;

function findNodeById(tree, id) {
    if (tree.id === id) {
        return tree;
    }
    for (let child of tree.children) {
        const found = findNodeById(child, id);
        if (found) {
            return found;
        }
    }
    return null;
}

function findParentNode(tree, nodeId) {
    for (let child of tree.children) {
        if (child.id === nodeId) {
            return tree;
        } else if (child.children.length > 0) {
            const parent = findParentNode(child, nodeId);
            if (parent) {
                return parent;
            }
        }
    }
    return null;
}

