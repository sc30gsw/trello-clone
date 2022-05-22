import React, {
	createContext,
	FC,
	ReactNode,
	useState,
	Dispatch,
	SetStateAction,
} from "react";
import { Task } from "../../types/task";

/**
 * Provider関数コンポーネントの型
 */
type Props = {
	children: ReactNode;
};

/**
 * Contextの作成
 */
export const TaskListContext = createContext(
	{} as {
		// Contextの型を定義
		taskList: Task[];
		setTaskList: Dispatch<SetStateAction<Task[]>>;
	}
);

/**
 * グローバルStateを返却する処理
 *
 * @param props
 * @returns taskList, setTaskList
 */
export const TaskListProvider: FC<Props> = (props) => {
	const { children } = props;

	// タスクを配列で保持するState(初期値: 空の配列[])
	const [taskList, setTaskList] = useState<Task[]>([]);

	// TaskListContextの中にProviderがあるため、childrenを囲む
	// valueにグローバルに扱う値を設定
	return (
		<TaskListContext.Provider value={{ taskList, setTaskList }}>
			{children}
		</TaskListContext.Provider>
	);
};
