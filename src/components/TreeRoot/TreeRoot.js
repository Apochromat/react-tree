import styles from './TreeRoot.module.css';
import TreeNode from "../TreeNode/TreeNode";

function TreeRoot(props) {
    return (
        <div className={styles.node}>
            <ul>
                {props.children && props.children.map((child) => (
                    <li key={child.id}><TreeNode id={child.id} nodeName={child.nodeName} children={child.children} handler={props.handler} focused={props.focused}/></li>
                ))}
            </ul>
        </div>
    );
}

export default TreeRoot;
  