document.addEventListener('DOMContentLoaded', function() {
    const healthCheckBtn = document.getElementById('healthCheck');
    const statusDiv = document.getElementById('status');
    
    healthCheckBtn.addEventListener('click', async function() {
        statusDiv.textContent = 'Checking...';
        statusDiv.className = '';
        
        try {
            const response = await fetch('/api/health');
            const data = await response.json();
            
            statusDiv.textContent = data.message;
            statusDiv.className = 'success';
        } catch (error) {
            statusDiv.textContent = 'Error: ' + error.message;
            statusDiv.className = 'error';
        }
    });
});
