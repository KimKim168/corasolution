import CompletProjectCora from '@/components/CompletProjectCora';
import Layout from '../Buddhist/Layout';
import { usePage } from '@inertiajs/react';

const project = () => {
    const {projects} = usePage().props; 
    return (
        <Layout>
            <div className="my-12 section-container">
                <CompletProjectCora projects={projects}/>
            </div>
        </Layout>
    );
};

export default project;
