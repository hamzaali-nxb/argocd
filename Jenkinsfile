pipeline {
    agent any
    
    stages {
        stage('Test Multiline') {
            steps {
                echo '''
Hello from Jenkins!
This is a multi-line echo test.
Line 3....
Line 4....
                '''
            }
        }
    }
}
