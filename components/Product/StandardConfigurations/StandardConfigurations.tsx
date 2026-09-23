import styles from "./StandardConfigurations.module.css";

export interface ConfigColumn {
  key: string;
  label: string;
}

export interface ConfigRow {
  [key: string]: string;
}

export interface StandardConfigurationsProps {
  title: string;
  columns: ConfigColumn[];
  rows: ConfigRow[];
  note: string;
}

export default function StandardConfigurations({
  title,
  columns,
  rows,
  note,
}: StandardConfigurationsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADING */}
        <div className={styles.heading} data-reveal="up">
          <h2>{title}</h2>
        </div>

        {/* TABLE */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}  data-reveal="up">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key}>{column.label}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column) => (
                    <td key={column.key}>{row[column.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* NOTE */}
        <p className={styles.note} data-reveal="up">
          {note}
        </p>
      </div>
    </section>
  );
}