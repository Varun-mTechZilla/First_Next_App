import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../../styles/Home.module.css";

const SingleRewie = () => {
	const router = useRouter();
	const { reviewId, novelId } = router.query;

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.title}>
					review {reviewId} of novel {novelId}.
				</div>
				<p className={styles.linkContainer_back_btn}>
					<Link href={"/novels/" + novelId}>back</Link>
				</p>
			</main>
		</div>
	);
};

export default SingleRewie;
