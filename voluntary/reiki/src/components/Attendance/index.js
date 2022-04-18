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
							Temos um ambiente preparado para te atender, através
							de horários agendados.
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
							Atendemos a domicílio dentro da nossa área de cobertura, entre em contato e saiba mais
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
							Atendimento Virtual? Nesse caso podemos atende-lo de qualquer lugar do mundo!
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