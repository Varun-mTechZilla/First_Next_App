import Link from "next/link";
import styles from "../styles/Home.module.css";

const About = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>About Page</h1>
				<Link href="/novels" className={styles.link}>
					<span>go to</span>
					<span className={styles.link_btn}>Novels</span>
					<span>store page.</span>
				</Link>
				<Link href="/" className={styles.back}>
					Go Back
				</Link>
			</main>
		</div>
	);
};

export default About;
