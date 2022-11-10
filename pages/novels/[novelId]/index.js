import Link from "next/link";

import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

export default function SingleNovel() {
	const router = useRouter();

	const { novelId } = router.query;

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Novel {novelId} details Page</h1>
				<div className={styles.linkContainer}>
					<span>Review for the</span>
					<p>
						<Link href={`/novels/${novelId}/review/2`}>
							Novel {novelId}
						</Link>
					</p>
				</div>
			</main>
		</div>
	);
}
