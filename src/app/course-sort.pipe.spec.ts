import { CourseSortPipe } from './course-sort.pipe';

describe('CourseSortPipe', () => {
  it('create an instance', () => {
    const pipe = new CourseSortPipe();
    expect(pipe).toBeTruthy();
  });
  let mockInput=[{"name":"John","age": 21,"nationality": "American"},{"name":"Ravi","age":31,"nationality":"Indian"},{"name":"Andrea","age":27,"nationality":"Mexican"}]

  it('should sort in ascending order', () => {
    //sorting in ascending order of name
    let sortObj={"name":true};
    let mockOutput=[{"name":"Andrea","age":27,"nationality":"Mexican"},{"name":"John","age": 21,"nationality": "American"},{"name":"Ravi","age":31,"nationality":"Indian"}]
    const pipe = new CourseSortPipe();
    expect(pipe.transform(mockInput,sortObj)).toEqual(mockOutput);
  });

  it('should sort in descending order', () => {
    //sorting in descending order of age
    let sortObj={"age":false};
    let mockOutput=[{"name":"Ravi","age":31,"nationality":"Indian"},{"name":"Andrea","age":27,"nationality":"Mexican"},{"name":"John","age": 21,"nationality": "American"}]
    const pipe = new CourseSortPipe();
    expect(pipe.transform(mockInput,sortObj)).toEqual(mockOutput);
  });
});
