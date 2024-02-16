import skills from "./data/skills.json";

skills.sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)

function App() {
	return (
		<main>
			<h1 className="text-2xl mb-3">Vite React Site</h1>
			<p>Welcome to this site.</p>
			<h2 className="mt-4 text-xl text-orange-800">
				{skills.length} Web Developer Skills
			</h2>
			<ul className="list-disc ml-6">
				{skills.map((skill) => {
					return <li><span className="font-semibold">{skill.name}</span> - {skill.description}</li>;
				})}
			</ul>
		</main>
	);
}
export default App;
