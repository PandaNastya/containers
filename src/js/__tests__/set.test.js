import Team from "../set";

const magician = {
        name: 'Magician',
        type: 'Magician'
};

const daemon = {
        name: 'Daemon',
        type: 'Daemon'
};

const bowerman = {
        name: 'Bowerman',
        type: 'Bowerman'
};

test('character is already use', () => {
    expect(() => {
        const team = new Team();
        team.add(magician);
        team.add(magician);
    }).toThrow('Герой уже используется');
});

test('add in team', () => {
    const team = new Team();
    team.add(daemon);
    const result = team.members.has(daemon);
    expect(result).toBe(true);
});

test('addAll - duplication characters ', () => {
    const team = new Team();
    team.addAll(daemon, magician, bowerman, magician, daemon);
    const result = team.members.size;
    expect(result).toBe(3);
});

test('toArray', () => {
    const team = new Team();
    team.addAll(daemon, bowerman);
    const arr = team.toArray();
    const result = [
        {
            name: 'Daemon',
            type: 'Daemon'
        },
        {
            name: 'Bowerman',
            type: 'Bowerman'
        }
    ];
    expect(arr).toEqual(result);
});