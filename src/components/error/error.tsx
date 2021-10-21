import React from "react"
import styles from "./error.module.scss"

interface Props {
	error: string
}

export const Error = ({ error }: Props) =>
	error ? <div className={styles.error}>{error}</div> : <></>
