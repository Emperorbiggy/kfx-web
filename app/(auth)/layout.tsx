// export const metadata = {
//   title: 'Login - CVtoCAREER',
//   description: 'Automate your job search with CVtoCAREER',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}
