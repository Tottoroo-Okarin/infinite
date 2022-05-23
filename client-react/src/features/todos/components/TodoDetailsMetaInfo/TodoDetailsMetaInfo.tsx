import { Todo } from "../../models/todo.model";
import classNames from 'classnames/bind';
import styles from './TodoDetailsMetaInfo.module.scss' 

interface TodoDetailsMetaInfo {
    todo?: Todo,
}
const classes = classNames.bind(styles)

export const TodoDetailsMetaInfo = ({todo}: TodoDetailsMetaInfo) => {
  const containerClasses = classes({
    metaContainer: true,
  })
  const metaPropTitleClasses = classes({
    metaPropTitle: true
  })
  return(
    <div className={containerClasses}>
      <div>
        <span className={metaPropTitleClasses}> Estimate: </span>
        <span> {todo?.estimate} </span>
      </div>
      <div>
        <span className={metaPropTitleClasses}> Status: </span>
        <span> {todo?.completed ? 'Completed' : 'In Progress'} </span>
      </div>
      <div>
        <span className={metaPropTitleClasses}> Assigned to: </span>
        <span> {todo?.assigneeId} </span>
      </div>
      <div>
        <span className={metaPropTitleClasses}> Assigned by: </span>
        <span> {todo?.assignedById} </span>
      </div>
      <div>
        <span className={metaPropTitleClasses}> Assigned on: </span>
        <span> {todo?.assignedOn} </span>
      </div>
      <div>
        <span className={metaPropTitleClasses}> Last updated on: </span>
        <span> {todo?.lastUpdatedOn} </span>
      </div>
    </div>
  )

}