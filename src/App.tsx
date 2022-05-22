import { Header } from "./components/Header";
import { TaskCards } from "./components/task/TaskCards";

export const App = () => {
	return (
		<div className="app">
			<Header />
			<TaskCards />
		</div>
	);
};
