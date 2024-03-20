import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import Error from './error';

export default function Home() {
  return <ErrorBoundary errorComponent={Error}><h1>Hello, Next.js!</h1></ErrorBoundary>
}
