#include <stdio.h>    
#include <stdlib.h>   
#include <string.h>   
#include <unistd.h>   
#include <sys/wait.h>
#include <signal.h>
#include <errno.h>
#include <readline/readline.h>

int bg_pid[100];
int bg_count = 0;


void handle_sigint(int sig){
    char str[100];
    const char* heading = "----------BACKGROUND PROCESSES----------\n";
    write(1,heading,strlen(heading)); 
    for (int j = 0; j < bg_count; j++){
        printf("PID : %d \n",bg_pid[j]);
    }
    fflush(stdout);
    
    const char* prompt = "shell>> ";   
    write(1,prompt,strlen(prompt));
}


int main(){

    signal(SIGINT,handle_sigint);
    signal(SIGTSTP,SIG_IGN);
    char *line = NULL;
    size_t len = 0;
    ssize_t nread;
    char *args[50];
    

    while(1){
        int bg  = 0;
        
        line = readline("shell>>");
        if (line == NULL){
            printf("\n");
            break;
        }

        int i = 0;
        char* token = strtok(line," \n");
        while (token){
            args[i] = token;
            i++;
            token = strtok(NULL," \n");
        }

        if (i == 0){
            free(line);
            continue;
        }
        
        if (i > 0 && strcmp(args[i-1],"&" ) == 0){
            bg = 1;
            args[i-1] = NULL;
            
        }
        args[i] = NULL;
        

        if (strcmp(args[0],"exit")==0){
            free(line);
            break;
        }

        if (strcmp(args[0],"cd")==0){
            if (args[1] == NULL){
                fprintf(stderr,"argument required\n");
                continue;
            }

            int res = chdir(args[1]);

            if (res == 0){
                printf("changed directory successfully\n");
            }
            else{
                perror("unsuccessful\n");
            }
            continue;
        }

        pid_t pid = fork();

        if (pid < 0){
            perror("fork failed");
        }
        else if (pid == 0){
            signal(SIGINT,SIG_DFL);
            signal(SIGTSTP,SIG_DFL);
            int result = execvp(args[0],args);
            if (result == -1){
                perror("Execution failed!\n");
            }
            exit(1);
        }
        else{
            if (bg == 0){
                waitpid(pid, NULL, WUNTRACED);
            }else{
                bg_pid[bg_count++] = pid;
                printf("Process running in the background with pid %d \n",pid);
           
            }       
        }
        free(line);
    }        
    return 0;
}