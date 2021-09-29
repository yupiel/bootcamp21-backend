const responseBuilder = require("../src/responseBuilder");
const calculateBirthyear = require("../src/calculateBirthyear");
const mediaLibrary = require("../src/mediaLibrary");

describe("responseBuilder", () => {
  it("should return code 200 with message", () => {
    const actual = responseBuilder(200, { message: "irgendwas" });

    const expected = {
      statusCode: 200,
      message: "irgendwas",
    };

    expect(JSON.parse(actual)).toEqual(expected);
  });

  it("should return code 200 with message and error", () => {
    const actual = responseBuilder(200, { message: "message", error: "error" });

    expect(JSON.parse(actual).message).toBeTruthy();
    expect(JSON.parse(actual).error).toBeTruthy();
  });
});

describe("calculateBirthyear", () => {
  /*it("should return NaN when parameter is Object", () => {
    const actual = calculateBirthyear({});

    expect(actual).toBe(NaN);
  });*/

  it("should throw TypeError when parameter is NaN", () => {
    const actual = () => {
      calculateBirthyear("yeet");
    };

    expect(actual).toThrow(TypeError);
  });
});

describe("mediaLibrary", () => {
  it("should add media type to library with value", () => {
    mediaLibrary.addMediaType("audio", { count: -1 });

    const actual = mediaLibrary.getCountForMediaType("audio");

    expect(actual).toBe(-1);
  });

  it("should delete media type from library", () => {
    mediaLibrary.deleteMediaType("books");

    const actual = mediaLibrary.getCountForMediaType("books");

    expect(actual).toBe(undefined);
  });
});

describe("example", () => {
  beforeAll(() => {
    jest.spyOn(mediaLibrary, "getCountForMediaType").mockImplementation(() => {
      return 0;
    });
  });

  it("beispiel", () => {
    let actual = 10;
    let expected = 5;

    expect(actual).toBeGreaterThan(expected);
  });

  it("mocking", () => {
    const fun = () => {
      const result = mediaLibrary.getCountForMediaType("books");

      if (result == 0) return true;
      else return false;
    };

    const actual = fun();

    expect(actual).toBeTruthy();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
