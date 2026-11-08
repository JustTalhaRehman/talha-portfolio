import { EngineeringNote, noteMetadata } from '@/components/EngineeringNote';

export const metadata = noteMetadata('gitops-bootstrap');
export default function Page() { return <EngineeringNote slug="gitops-bootstrap" />; }
