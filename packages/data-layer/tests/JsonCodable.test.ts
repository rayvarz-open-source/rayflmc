import * as mocha from 'mocha';
import {assert, expect} from 'chai';
import { CodableModel } from '../src/Base/IModel';

class FakeDataClass extends CodableModel {
  name?: string;
  age?: number;
}

class ClassThatCantBeEncoded {}

class ClassThatCanBeEncoded extends CodableModel {
  name: string = "test";
}

class FakeDataClassWithMethods extends CodableModel {
  name?: string;
  age?: number;

  sampleUnencodableProperty?: ClassThatCantBeEncoded;

  sampleUnencodablePropertyWithDefaultValue: ClassThatCantBeEncoded = new ClassThatCantBeEncoded();

  sampleEncodableProperty?: ClassThatCanBeEncoded;

  testMethod() {}
}

describe('JSON Codable', () => {
    describe('decodable', () => {
      it('should create a object from a data class', () => {
        let testModel = new FakeDataClass();
        testModel.name = "test";
        testModel.age = 10;
        assert.equal(JSON.stringify(testModel.decode()), '{"name":"test","age":10}');
      });

      it('should ignore functions', () => {
        let testModel = new FakeDataClassWithMethods();
        testModel.name = "test";
        testModel.age = 10;
        assert.equal(JSON.stringify(testModel.decode()), '{"name":"test","age":10}');
      });

      it('should handle null and undefiened properties as null and ignore un encodable ones', () => {
        let testModel = new FakeDataClassWithMethods();
        testModel.name = "test";
        testModel.age = 10;
        testModel.sampleUnencodableProperty = undefined;

        expect(testModel.decode())
          .to.eql({"name":"test","age":10,"sampleUnencodableProperty":null})
        
        testModel.sampleEncodableProperty = new ClassThatCanBeEncoded();

        expect(testModel.decode())
          .to.eql({
            "name":"test",
            "age":10,
            "sampleUnencodableProperty":null, 
            "sampleEncodableProperty":{
              "name": "test"
            }
          })

      });

    });

    describe("encodable", () => {

      it('it should assign value from data object to correct position', () => {
        let testModel = new FakeDataClass();
        testModel.encode({
          "name": "test",
          "age": 10
        });
        expect(testModel.decode())
          .to.eql({"name":"test","age":10})
      });

    })

});