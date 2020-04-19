package ar.com.wanted.wantedapi.issues.redmine.dto;

public class CustomFields{
	  private int id; 
	  private String name; 
	  private String value; 

	  public int getId(){
	  	return id; 
	  }
	  public void setId(int input){
	  	 this.id = input;
	  }
	  public String getName(){
	  	return name; 
	  }
	  public void setName(String input){
	  	 this.name = input;
	  }
	  public String getValue(){
	  	return value; 
	  }
	  public void setValue(String input){
	  	 this.value = input;
	  }
}