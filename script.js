window.addEventListener('DOMContentLoaded', () => {
    const project = document.getElementById('project');
    const milestone = document.getElementById('milestone');
    project.addEventListener('change', generateLinks);
    milestone.addEventListener('change', generateLinks);
    generateLinks();
});

function generateLinks() {
    const project = document.getElementById('project').value;
    const milestone = document.getElementById('milestone').value;
    let boardURL = `${project}/boards?scope=all&utf8=✓&state=opened&milestone_title=${milestone}`;
    let mergeURL = `${project}/merge_requests?scope=all&utf8=✓&state=opened&milestone_title=${milestone}`;
    let milestonesURL = `${project}/milestones?state=opened`;
    if(project.includes('github.com')) {
        boardURL = `${project}/issues`;
        mergeURL = `${project}/pulls`;
        milestonesURL = '';
    }
    document.getElementById('board').setAttribute('href', boardURL);
    document.getElementById('merge').setAttribute('href', mergeURL);
    document.getElementById('allMilestones').setAttribute('href', milestonesURL);
}