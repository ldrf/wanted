package ar.com.wanted.wantedapi.issues.redmine.dto;

public class Author{
	  private int id; 
	  private String name; 

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
}