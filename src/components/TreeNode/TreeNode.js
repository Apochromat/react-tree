import styles from './TreeNode.module.css';

function TreeNode(props) {
    const handleChange = () => {
        props.handler(props.id);
    };

    return (<div className={styles.node}>
        <input className={`${styles.node__title} ${props.focused === props.id ? styles.node__title__focus : ""}`}
               id={props.id}
               value={`${props.nodeName}`}
               readOnly={true}
               onClick={handleChange}></input>
        <div className={styles.node__children}>
            <ul>
                {props.children && props.children.map((child) => (
                    <li key={child.id}><TreeNode id={child.id} nodeName={child.nodeName} children={child.children}
                                                 handler={props.handler} focused={props.focused}/></li>))}
            </ul>
        </div>
    </div>);
}

export default TreeNode;
