import Link from "next/link";

import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function Novels() {
	const router = useRouter();
	const path = router.pathname;

	const lists = [
		{
			id: 1,
			title: "Novel 1",
			goTo: `${path}/1`,
		},
		{
			id: 2,
			title: "Novel 2",
			goTo: `${path}/2`,
		},
		{
			id: 3,
			title: "Novel 3",
			goTo: `${path}/3`,
		},
		{
			id: 4,
			title: "Novel 4",
			goTo: `${path}/4`,
		},
	];

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Novels Page</h1>

				<ul className={styles.lists}>
					{lists.map((list) => (
						<li key={list.id}>
							<Link href={list.goTo}>{list.title}</Link>
						</li>
					))}
				</ul>
				<div className={styles.btnContainer}>
					<p>
						<Link href={"/about"}>go back</Link>
					</p>
					<span>or</span>
					<p>
						<Link href={"/"}>go home</Link>
					</p>
				</div>
			</main>
		</div>
	);
}
