package ar.com.wanted.wantedapi.issues.redmine.dto;

import java.util.List;

public class Issues{
	  private long id; 
	  private Project project; 
	  private Tracker tracker; 
	  private Status status; 
	  private Priority priority; 
	  private Author author; 
	  private AssignedTo assignedTo; 
	  private String subject; 
	  private String description; 
	  private String startDate; 
	  private int doneRatio; 
	  private List<CustomFields> customFields; 
	  private String createdOn; 
	  private String updatedOn; 

	  public long getId(){
	  	return id; 
	  }
	  public void setId(long input){
	  	 this.id = input;
	  }
	  public Project getProject(){
	  	return project; 
	  }
	  public void setProject(Project input){
	  	 this.project = input;
	  }
	  public Tracker getTracker(){
	  	return tracker; 
	  }
	  public void setTracker(Tracker input){
	  	 this.tracker = input;
	  }
	  public Status getStatus(){
	  	return status; 
	  }
	  public void setStatus(Status input){
	  	 this.status = input;
	  }
	  public Priority getPriority(){
	  	return priority; 
	  }
	  public void setPriority(Priority input){
	  	 this.priority = input;
	  }
	  public Author getAuthor(){
	  	return author; 
	  }
	  public void setAuthor(Author input){
	  	 this.author = input;
	  }
	  public AssignedTo getAssignedTo(){
	  	return assignedTo; 
	  }
	  public void setAssignedTo(AssignedTo input){
	  	 this.assignedTo = input;
	  }
	  public String getSubject(){
	  	return subject; 
	  }
	  public void setSubject(String input){
	  	 this.subject = input;
	  }
	  public String getDescription(){
	  	return description; 
	  }
	  public void setDescription(String input){
	  	 this.description = input;
	  }
	  public String getStartDate(){
	  	return startDate; 
	  }
	  public void setStartDate(String input){
	  	 this.startDate = input;
	  }
	  public int getDoneRatio(){
	  	return doneRatio; 
	  }
	  public void setDoneRatio(int input){
	  	 this.doneRatio = input;
	  }
	  public List<CustomFields> getCustomFields(){
	  	return customFields; 
	  }
	  public void setCustomFields(List<CustomFields> input){
	  	 this.customFields = input;
	  }
	  public String getCreatedOn(){
	  	return createdOn; 
	  }
	  public void setCreatedOn(String input){
	  	 this.createdOn = input;
	  }
	  public String getUpdatedOn(){
	  	return updatedOn; 
	  }
	  public void setUpdatedOn(String input){
	  	 this.updatedOn = input;
	  }
}