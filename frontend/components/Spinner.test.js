// Import the Spinner component into this file and test
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Spinner from "./Spinner"

// that it renders what it should for the different props it can take.
describe("Spinner component", () => {
  test("renders when on", () => {
    render(<Spinner on={true}/>)

    expect(document.getElementById('spinner')).toBeVisible()
    expect(screen.getByText("Please wait...")).toBeVisible()
    expect(screen.getByText('.')).toBeVisible()
  })

  test("does not render when off", () => {
    render(<Spinner on={false}/>)
    expect(document.getElementById('spinner')).not.toBeInTheDocument()
    expect(screen.queryByText("Please wait...")).not.toBeInTheDocument()
    expect(screen.queryByText(".")).not.toBeInTheDocument()
  })
})
