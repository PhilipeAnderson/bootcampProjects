import styles from './styles.module.css';

export function Attendance() {
	return (
		<main className={styles.container}>
			<section className={styles.content}>
				<div className={styles.boxAttendance}>
					<header className={styles.headerBox}>
						<h2 className={styles.headerTitle}>Presencial</h2>
						<br />
						<p className={styles.headerText}>
							Temos um ambiente preparado para te atender. Agende seu horário!
						</p>
					</header>

					<button className={styles.buttomBox}>
						<a target='_blank' href='https://wa.me/+554199878169'>Fale Conosco</a>
					</button>
				</div>
				<div className={styles.boxAttendance}>
					<header className={styles.headerBox}>
						<h2 className={styles.headerTitle}>Domicílio</h2>
						<br />
						<p className={styles.headerText}>
						No conforto de sua casa, com flexibilidade de horários, segundo sua disponibilidade!
						</p>
					</header>

					<button className={styles.buttomBox}>
						<a target='_blank' href='https://wa.me/+554199878169'>Fale Conosco</a>
					</button>
				</div>
				<div className={styles.boxAttendance}>
					<header className={styles.headerBox}>
						<h2 className={styles.headerTitle}>Online</h2>
						<br />
						<p className={styles.headerText}>
						Experimente também essa modalidade, você escolhe o melhor horário!
						</p>
					</header>

					<button className={styles.buttomBox}>
						<a target='_blank' href='https://wa.me/+554199878169'>Fale Conosco</a>
					</button>
				</div>
			</section>
		</main>
	)
}