import { useRouter } from "next/router";

function Params() {
	const router = useRouter();
	const { params = [] } = router.query;

	if (params[2]) {
		return (
			<h1>
				Example1 of {params[1]} of {params[0]}
			</h1>
		);
	} else if (params[1]) {
		return <h1>Concept1 of {params[0]} of docs</h1>;
	}

	return <div>Docs Page Route</div>;
}

export default Params;
